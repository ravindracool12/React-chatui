import React, { Component } from 'react';
import './Chatlist.css';
import Chatlistitems from './Chatlistitems';
export default class Chatlist extends Component {
    allChatsUsers = [ 
        {
            images://encrypted-th
        }
    ];
    constructor(props){
        super(props);
        this.state = {
            allChats: this.allChatsUsers,
        };
    }
    render(){
        return(
         <div className="main_chatlist">
            <button className="btn">
                <i className="fa fa-plus"></i>
                <span>New conversation</span>
            </button>
            <div className="chatlist_heading">
                <h2>Chats</h2>
                <button className="btn-nobg">
                    <i className="fa fa-ellipsis-h"></i>
                </button>
            </div>
            <div className="chatlist_search">
                <div className="search-wrap">
                    <input type="text" placeholder="Search Here" required />
                    <button className="search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="chatlist_items">
                {this.state.allChats.map((item, index) => {
                    return(
                        <Chatlistitems
                          name={item.name}
                          key={item.id}
                          animationDelay={index +1}
                          active={item.active ? "active" : ""}
                          isOnline={item.isOnline ? "active" : ""}
                          image={item.image}
                        />
                    );
                })}  
            </div>
        </div>
        );
    }
}