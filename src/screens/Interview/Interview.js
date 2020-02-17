import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  StatusBar,
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import CountDown from 'react-native-countdown-component';
import QuestionText from './QuestionText';
import QuestionVideo from './QuestionVideo';
import MultipleChoice from './MultipleChoice';
import MultipleSelect from './MultipleSelect';
import * as actionAnswer from '../../redux/actions/answer';
import * as actionQuestions from '../../redux/actions/questions';

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      attachment: null,
      userId: null,
      number: 1
    };
  }

  componentDidMount() {
    this.props.getQuestions(this.state.number);
  }

  nextQuestion = async () => {
    this.props.postAnswer({
      questionId: this.props.questions.data.question.id,
      userId: this.props.user.userId,
      answer: this.state.answer,
      attachment: this.state.attachment
    });
    await this.setState({
      number: this.state.number + 1,
      answer: null,
      attachment: null
    });
    if (this.state.number <= this.props.questions.data.question_count) {
      this.props.getQuestions(this.state.number);
    } else {
      Alert.alert(
        'Congratulations',
        'Terima kasih sudah menjawab semua pertanyaan interview online kami, silahkan tunggu bulan depan untuk pengumuman hasilnya',
        [
          {
            text: 'OK',
            onPress: () => this.props.navigation.navigate('Initial')
          }
        ],
        { cancelable: false }
      );
    }
  };

  changeState = (state, value) => {
    if (state === 'answer') {
      this.setState({
        answer: value
      });
    } else {
      this.setState({
        attachment: value
      });
    }
  };

  render() {
    const question = this.props.questions.data.question;

    if (question === undefined) {
      return (
        <View style={styles.containerTransparent}>
          <ActivityIndicator size={'large'} />
          <Text style={styles.note}>loading</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#504fbd" barStyle="light-content" />
          <View style={styles.header}>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={styles.textQuestion}>QUESTION</Text>
            </View>
          </View>
          <View style={styles.bottomHeader}>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={styles.textQuestionBottom}>
                Question {question.number} of{' '}
                {this.props.questions.data.question_count}
              </Text>
              <CountDown
                until={question.timer * 60}
                size={15}
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'flex-end',
                  marginTop: -28
                }}
                onFinish={this.nextQuestion}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#6a69e2' }}
                timeLabels={{ m: null, s: null }}
                timeToShow={['M', 'S']}
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.questionPlace}>
              <View style={styles.questionDistance}>
                {question.type === 'text' ? (
                  <QuestionText
                    number={question.number}
                    desc={question.description}
                    changeState={this.changeState}
                  />
                ) : question.type === 'multiple choice' ? (
                  <MultipleChoice
                    options={question.options}
                    number={question.number}
                    desc={question.description}
                    changeState={this.changeState}
                  />
                ) : question.type === 'multiple select' ? (
                  <MultipleSelect
                    options={question.options}
                    number={question.number}
                    desc={question.description}
                    changeState={this.changeState}
                  />
                ) : (
                  <QuestionVideo
                    number={question.number}
                    desc={question.description}
                    changeState={this.changeState}
                  />
                )}
                <Button
                  buttonStyle={styles.btnStyle}
                  titleStyle={styles.btnTitleStyle}
                  title={
                    this.state.number ==
                    this.props.questions.data.question_count
                      ? 'Selesai Tes'
                      : 'Pertanyaan Selanjutnya'
                  }
                  onPress={this.nextQuestion}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#6a69e2'
  },
  bottomHeader: {
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textQuestionBottom: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 13
  },
  textQuestion: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 20
  },
  questionPlace: {
    flex: 5
  },
  questionDistance: {
    marginHorizontal: 10,
    marginTop: 20
  },
  btnStyle: {
    margin: 30,
    marginTop: 50,
    backgroundColor: '#fff',
    borderColor: '#6a69e2',
    borderWidth: 1,
    borderRadius: 50
  },
  btnTitleStyle: {
    color: '#6a69e2',
    fontWeight: '500',
    fontSize: 16
  },
  containerTransparent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  note: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    user: state.registration,
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: number => dispatch(actionQuestions.questions(number)),
    postAnswer: userAnswer => dispatch(actionAnswer.answer(userAnswer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interview);
