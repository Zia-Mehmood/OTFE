import React, { useEffect, useState } from "react";
import { cn } from "../../../utls/utlis";
import DataTable, { createTheme } from "react-data-table-component";
import userData from "../../../data/exercise.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopModal from "./Modal";
import { CustomText } from "../../common/components/CustomText";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
function sendMessage(e) {
  console.log("send Message....", e);
}
const UserChat = React.forwardRef(
  ({ className, cardImage, bgPopular, ...props }, ref) => {
    return (
      <div style={{ position: "relative", height: "500px" }}>
        <MainContainer>
          <ChatContainer>
            <ConversationHeader>
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
              <ConversationHeader.Content
                userName="The_Rock"
                info="last active 10 min. ago"
              ></ConversationHeader.Content>
            </ConversationHeader>
            <MessageList>
              <Message
                model={{
                  message: "Hey Max",
                  sentTime: "just now",
                  sender: "Joe",
                  direction: "incoming",
                  position: "single",
                }}
              >
                <Avatar
                  name="Zoe"
                  src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                />
              </Message>
              <Message
                model={{
                  message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                  sentTime: "just now",
                  sender: "Joe",
                }}
              />
            </MessageList>
            <MessageInput
              attachButton={false}
              placeholder="Type message here"
              onSend={sendMessage}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    );
  }
);

UserChat.displayName = "UserChat";

export { UserChat };
