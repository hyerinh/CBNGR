import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView, Linking} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import { dialogflowConfig } from './env';
import { ListItem } from 'react-native-elements/dist/list/ListItem';

const botAvatar = require('./assets/images/chulbae.png');

const BOT = {
  _id: 2,
  name: '김철배',
  avatar: botAvatar,
};

var ytlink = new String ('ytlink');

class App extends Component {

  state = {
    messages: [
      {_id: 1,
        text: '안녕하세요! 김철배입니다.\n무엇을 도와드릴까요?',
        createdAt: new Date(),
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {title: '전화',
             value: '전화',
             bColor: '#F9AC19',
             bgColor: '#F9AC19',
            },
            {title: '문자',
             value: '문자',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
            {title: '설정',
             value: '설정',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
            {title: '어플',
             value: '어플',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            }
          ],
        },
      },
    ],
    id: 1,
    name: '',
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_KOREAN,
      dialogflowConfig.project_id,
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg;

    if (text == 'call options') {
      msg = {
        _id: this.state.messages.length + 1,
        text: '어떤 기능을 알고 싶으신가요?',
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {title: '전화 걸기',
             value: '전화 걸기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
            {title: '전화 받기',
             value: '전화 받기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
          ],
        } 
      };
    }

    else if (text == 'message options') {
      msg = {
        _id: this.state.messages.length + 1,
        text: '어떤 기능을 알고 싶으신가요?',
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {title: '문자 보내기',
             value: '문자 보내기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
            {title: '문자 확인하기',
             value: '문자 확인하하기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
          ],
        } 
      };
    }

    else if (text == 'settings options') {
      msg = {
        _id: this.state.messages.length + 1,
        text: '어떤 기능을 알고 싶으신가요?',
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {title: '와이파이 설정하기',
             value: '와이파이 설정하기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
            {title: '데이터 설정하기',
             value: '데이터 설정하기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
          ],
        } 
      };
    }

    else if (text == 'app options') {
      msg = {
        _id: this.state.messages.length + 1,
        text: '어떤 기능을 알고 싶으신가요?',
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {title: '어플 설치하기',
             value: '어플 설치하기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
            {title: '어플 삭제하기',
             value: '어플 삭제하기',
             bColor: '#F9AC19',
             bgColor: '#F9AC19'
            },
          ],
        } 
      };
    }

    else if (text == 'how to make call') {
     msg = {
       _id: this.state.messages.length + 1,
       user: BOT,
       isOptions: true,

       text: '전화 거는 방법은 아래 영상을 통해 확인할 수 있습니다.',
       data: [{
         title: '전화 거는 방법',
         image: 'https://ifh.cc/g/y3IVdO',
         ytlink: 'https://youtu.be/Og_bcZ73JJE'
       }
      ],
     };
    }

    else if (text == 'how to answer') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '전화 받는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '전화 받는 방법',
          image: 'https://ifh.cc/v-peWAMs',
          ytlink: 'https://youtu.be/1FsI3OpRrRM'
        }
       ],
      };
     }

     else if (text == 'send_message') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '문자 보내는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '문자 보내는 방법',
          image: 'https://ifh.cc/v-JsjZ2E',
          ytlink: 'https://youtu.be/j5M3F0Ei2tw'
        }
       ],
      };
     }

     else if (text == 'check_message') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '문자 확인하는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '문자 확인하는 방법',
          image: 'https://ifh.cc/v-EKwgxy',
          ytlink: 'https://youtu.be/dP37Ww1L9jg'
        }
       ],
      };
     }

     else if (text == 'set_wifi') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '와이파이 연결하는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '와이파이 연결하는 방법',
          image: 'https://ifh.cc/v-6FrvdU',
          ytlink: 'https://youtu.be/w2yjpFCqa2E'
        }
       ],
      };
     }

     else if (text == 'set_data') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '데이터 연결하는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '데이터 연결하는 방법',
          image: 'https://ifh.cc/v-XyvEKJ',
          ytlink: 'https://youtu.be/MrDAUFW6zT4'
        }
       ],
      };
     }

     else if (text == 'app_install') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '어플 설치하는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '어플 설치하는 방법',
          image: 'https://ifh.cc/v-Vvpe22',
          ytlink: 'https://youtu.be/w2yjpFCqa2E'
        }
       ],
      };
     }

     else if (text == 'app_remove') {
      msg = {
        _id: this.state.messages.length + 1,
        user: BOT,
        isOptions: true,
 
        text: '어플 삭제하는 방법은 아래 영상을 통해 확인할 수 있습니다.',
        data: [{
          title: '어플 삭제하는 방법',
          image: 'https://ifh.cc/v-ZkdzDd',
          ytlink: 'https://youtu.be/AyageZIC1IM'
        }
       ],
      };
     }

    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, [msg]),
    }));
  }

  onSend(messages = []){
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, messages)
    }));

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    );
  }

  onQuickReply(quickReply){
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, quickReply)
    }));

    let message = quickReply[0].value;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    );
  }

  renderBubble = props => {

    if (props.currentMessage.isOptions) {
      return (
        <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
          {props.currentMessage.data.map((item) => (
            <Card key={item.title}>
              <Card.Image
                style={{width:220, height: 220}}
                resizeMode="cover"
                source={{uri: item.image}}></Card.Image>
              <Card.Divider />
              <Card.Title>아래 버튼을 눌러 확인하세요!</Card.Title>
              <Card.Divider />
              <Button
                title={item.title}
                style={{height: 35}}
                onPress={()=> Linking.openURL(toString(ytlink))}
              />
            </Card>
          ))}
        </ScrollView>
      );
    }
    return (
      <Bubble
        {...props}
        textStyle={{right: {color: 'black'}}}
        wrapperStyle={{
          left: {backgroundColor: '#F4F2F0'},
          right: {backgroundColor: '#F6D493'}
        }}
      />
    );
  };

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#fff'}}>
        <GiftedChat
          messages={this.state.messages} 
          onSend={(message) => this.onSend(message)} 
          onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
          renderBubble={this.renderBubble}
          user={{_id: 1}}
        />
      </View>
    );
  }
}

export default App;