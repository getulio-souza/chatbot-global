function clearInput() {
  const myInput = document.querySelector('.input__chat');
  myInput.value = '';
}

class ChatBox {
  constructor(){
    this.args = {
      actionButton: document.querySelector('.action__btn'),
      openButton: document.querySelector('.chatbox__button'),
      chatBox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.send__button'),
      closeButton: document.querySelector('.close-chatbox-btn')

    // closeButton.classList.remove('chatbox--active')
    }

    this.state = false;
    this.messages = []
  }

  //display the messages on chatbot

  display() {
    const { openButton, actionButton, chatBox, sendButton, closeButton } = this.args;

    actionButton.addEventListener('click', () => this.toggleState(chatBox))
    openButton.addEventListener('click', () => this.toggleState(chatBox))
    sendButton.addEventListener('click', () => this.onSendButton(chatBox))
    closeButton.addEventListener('click', () => this.closeChatBox(chatBox))
    
    const node = chatBox.querySelector('input');
    node.addEventListener('keyup', ({ key }) => {
      if (key === 'Enter') {
        this.onSendButton(chatBox)
        clearInput()
      }
    })

    sendButton.addEventListener('click', (() => {
      node.value = ''
    }))
  
  }

  //implements the tooogle state
  toggleState(chatbox) {
    this.state = !this.state;
    //show or hides the box
    if (this.state) {
      chatbox.classList.add('chatbox--active');
    } else {
      chatbox.classList.remove('chatbox--active');
    }
  } 

  //close chatbox by clicking on X
  closeChatBox(chatbox) {
    this.state = this.state;
    if (this.state) {
      chatbox.classList.remove('chatbox--active')
    }
  }

  //implements the send button functionality
  onSendButton(chatbox) {
    var textField = chatbox.querySelector('input');
    let text1 = textField.value
    if (text1 === "") {
      return;
    }

    let msg1 = { name: "User", message: text1 }
    this.messages.push(msg1);

    fetch($SCRIPT_ROOT + '/predict', {
      method: 'POST',
      body: JSON.stringify({ message: text1 }),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(response => {
        let msg2 = { name: 'John', message: response.answer };
        this.messages.push(msg2);
        this.updateChatText(chatbox)
      })
      .catch((error) => {
        console.log('Error', error);
        this.updateChatText(chatbox)
        textField.value = ''
      });
  }

  //update function
  updateChatText(chatbox) {
    var html = '';
    this.messages.slice().reverse().forEach(function (item) {
      if (item.name === "John") {
        html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
      } else {
        html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
      }
    });

    const chatMessage = chatbox.querySelector('.chatbox__messages')
    chatMessage.innerHTML = html;
  }
}

const chatbox = new ChatBox();
chatbox.display()