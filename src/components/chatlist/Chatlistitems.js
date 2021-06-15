import React, { Component } from 'react';
import Avatar from "./Avatar";

export default class Chatlistitems extends Component {
    constructor(props){
        super(props);
    }
    selectChat = (e) => {
        for (
            let index = 0;
            index < e.currentTarget.parentNode.children.length;
            index++
        ){
            e.currentTarget.parentNode.children[index].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    };
    render() {
        return (
            <div
              style={{ animationDelay: `0.${this.props.animationDelay}$` }}
              onClick={this.selectChat}
              className={`chatlist_item ${
                  this.props.active ? this.props.active :"" 
            } `}
            >
             <Avatar 
               image={
                   this.props.image ? this.props.image : "hhttp://placehold.it/80x80"
               }
               isOnline={this.props.isOnline}
             />
             <div classNmae="userMeta">
               <p>{this.props.name}</p>
               <span classNmae="activeTime">32 mins ago</span>
             </div>
            </div>
        )
    }
}