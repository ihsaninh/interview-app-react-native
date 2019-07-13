import React, { Component } from "react";
import { Text, View, StatusBar, TextInput, ScrollView } from "react-native";
import { Icon, CheckBox, Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import * as actionInterview from "../../redux/actions";
import { connect } from "react-redux";
import axios from "axios";

class Interview extends Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
      questions: [],
      question_id : '',
      inputContent: ''
    };
  }
  componentDidMount() {
    this.getListQuestions();
  }
  getListQuestions = async () => {
    axios
      .get(`http://192.168.0.26:3333/api/v1/questions/`)
      .then(res => {
        const questions = res.data.data;
        this.setState({
          questions: questions
        });
      })
      .catch(err => {
        alert("Terjadi error saat mengambil data");
      });
  };

  handleCreate = async () => {
    const question_id = this.state.question_id
    const user_id = 15
    answer = 
    axios
      .post(`${ENV.API_URL}/api/v1/chats/`, { content: this.state.inputContent, room_id: room_id }, { headers: headers })
      .then(res => {
        this.setState({
          inputContent: ""
        });
      })
      .catch(err => {
        alert("Field tidak boleh kosong");
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#504fbd" barStyle="light-content" />
        <View style={{ height: 60, backgroundColor: "#6a69e2" }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "500",
                paddingTop: 20
              }}
            >
              QUESTION
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={{ flex: 5 }}>
            {this.state.questions.map((question, i) => (
              <View style={{ marginHorizontal: 10 }}>
                <View>
                  <Text style={{ fontSize: 19, marginBottom: 10 }}>{question.number} {question.description}</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={7}
                    style={{ borderRadius: 10, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={inputContent =>
                      this.setState({ inputContent })
                  }
                  />
                  <Button
                    buttonStyle={{
                      margin: 30,
                      marginTop: 10,
                      backgroundColor: "#fff",
                      borderColor: "#6a69e2",
                      borderWidth: 1,
                      borderRadius: 50
                    }}
                    titleStyle={{
                      color: "#6a69e2",
                      fontWeight: "500",
                      fontSize: 16
                    }}
                    title="Simpan Jawaban"
                    onPress={this.handleAnswer}
                  />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const QuestionInput = () => {
  return (
    <View>
      <Text style={{ fontSize: 19 }}>{props.question}</Text>
      <TextInput
        multiline={true}
        numberOfLines={7}
        style={{ borderRadius: 10, borderColor: "gray", borderWidth: 1 }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    questions: value => dispatch(actionInterview.questions())
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Interview)
);
