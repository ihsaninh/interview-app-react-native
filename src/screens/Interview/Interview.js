import React, { Component } from "react"
import { Text, View, StatusBar, TextInput, ScrollView, button, StyleSheet, AsyncStorage, Alert } from "react-native"
import { Icon, Button } from "react-native-elements"
import { withNavigation } from "react-navigation"
import * as actionInterview from "../../redux/actions"
import CountDown from 'react-native-countdown-component';
import QuestionText from './QuestionText'
import MultipleChoice from './MultipleChoice'
import MultipleSelect from './MultipleSelect'
import QuestionVideo from './QuestionVideo'
import { connect } from "react-redux"

class Interview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      answer: '',
      attachment: null,
      answer: '',
      number: 1
    };
  }
   componentDidMount() {
    this.props.getQuestions(this.state.number)
  }

  _nextQuestion = async () => {
    user_id = await AsyncStorage.getItem('user_id')
    this.props.postAnswer({ 
      questionId: this.props.questions.data.question.id, 
      userId: user_id, 
      answer: this.state.answer,
      attachment: this.state.attachment
    })
    await this.setState({
      number: this.state.number + 1
    })
    if(this.state.number <= this.props.questions.data.question_count) {
      this.props.getQuestions(this.state.number)
    } else {
        Alert.alert(
          'Congratulations',
          'Terima kasih sudah menjawab semua pertanyaan interview online kami, silahkan tunggu bulan depan untuk pengumuman hasilnya',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('Registration')},
          ],
          {cancelable: false},
        );
    }
  }

  changeState = (state, value) => {
    if(state === 'answer') {
      this.setState({
        answer: value
      })
    } else {
      this.setState({
        attachment: value
      })
    }
  }

  render() {
    const question = this.props.questions.data.question
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#504fbd" barStyle="light-content" />
        <View style={styles.header}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.textQuestion}>QUESTION</Text>
          </View>
        </View>
        <View style={styles.headerbawah}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.textQuestionBottom}>Question {question.number} of {this.props.questions.data.question_count}</Text>
            <CountDown
              until={question.timer * 60}
              size={15}
              style={{alignSelf: 'flex-end', alignItems: 'flex-end', marginTop: -28}}
              onFinish={this._nextQuestion}
              digitStyle={{backgroundColor: '#FFF'}}
              digitTxtStyle={{color: '#1CC625'}}
              timeLabels={{m: null, s: null}}
              timeToShow={['M', 'S']}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.questionPlace}>
              <View style={styles.questionDistance}>
               {
                 (question.type === 'text') ? (
                  <QuestionText number={question.number} desc={question.description} changeState={this.changeState}/>
                   ) : (question.type === 'multiple choice') ? (
                    <MultipleChoice options={question.options}  number={question.number} desc={question.description} changeState={this.changeState} />
                   ) : (question.type === 'multiple select') ? (
                      <MultipleSelect options={question.options} number={question.number} desc={question.description} changeState={this.changeState}/>
                   ) : (
                     <QuestionVideo />
                   )
               }
                  <Button
                    buttonStyle={styles.btnStyle}
                    titleStyle={styles.btnTitleStyle}
                    title={this.state.number === this.props.questions.data.question_count ? "Selesai Tes" : 'Pertanyaan Selanjutnya'}
                    onPress={this._nextQuestion}
                  />
              </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60, 
    backgroundColor: "#6a69e2"
  },
  headerbawah : {
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textQuestionBottom : {
    color: '#fff',
    fontSize: 18,
    paddingTop: 13
  },
  textQuestion: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 20
  },
  questionPlace: {
    flex: 5
  },
  questionDistance: {
    marginHorizontal: 10
  },
  btnStyle: {
    margin: 30,
    marginTop: 10,
    backgroundColor: "#fff",
    borderColor: "#6a69e2",
    borderWidth: 1,
    borderRadius: 50
  },
  btnTitleStyle: {
    color: "#6a69e2",
    fontWeight: "500",
    fontSize: 16
  }
})

const mapStateToProps = state => {
  return {
    questions : state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: (number) => dispatch(actionInterview.questions(number)),
    postAnswer: (value) => dispatch(actionInterview.answer(value))
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Interview)
);
