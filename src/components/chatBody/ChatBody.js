import React, { Component } from "react";
import "./ChatBody.css";
import Chatlist from "../chatlist/Chatlist";
import Chatcontent from "../chatcontent/Chatcontent";
import Userprofile from "../userprofile/Userprofile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <Chatlist />
        <Chatcontent />
        <Userprofile />
      </div>
    );
  }
}
