// import React, { useState, useCallback, useEffect, useRef, FC } from "react";
// import { useQuery, useMutation, useSubscription } from "@apollo/client";
// import RoomPresenter from "./RoomPresenter";
// import { roomQuery } from "../../graphql/room/query";
// import { addMessageMutation } from "../../graphql/room/mutation/add";
// import { syncMessageSubscription } from "../../graphql/room/subscription";
// import { useVssState } from "../../context";

// const RoomContainer: FC = ({ roomId }: { roomId: string }) => {
//   const { id } = useVssState();

//   const { data, loading } = useQuery(roomQuery, {
//     variables: {
//       roomId
//     },
//     fetchPolicy: "network-only"
//   });

//   const { data: newMessage } = useSubscription(syncMessageSubscription, {
//     variables: {
//       roomId
//     }
//   });

//   const [add, { loading: addMessageLoading }] = useMutation(addMessageMutation);

//   const bodyEl = useRef(null);
//   const [messages, setMessages] = useState<Array<any>>([]);
//   const [message, setMessage] = useState<string>("");

//   const handleChangeMessage = useCallback(e => {
//     setMessage(e.target.value);
//   }, []);

//   const handleSubmit = useCallback(
//     async e => {
//       e.preventDefault();
//       setMessage("");
//       try {
//         const {
//           data: { addMessage }
//         } = await add({
//           variables: { content: message, roomId }
//         });
//         if (addMessage) {
//           setMessages(prevState => [...prevState, addMessage]);
//         }
//       } catch (error) {
//         const { message } = JSON.parse(error.message);
//         alert(message);
//       }
//     },
//     [message, addMessageLoading]
//   );

//   useEffect(() => {
//     if (newMessage) {
//       const isExistMessage = messages.some(v => newMessage.id === v.id);
//       if (!isExistMessage) {
//         setMessages(prevState => [...prevState, newMessage.syncMessage]);
//       }
//     }
//   }, [newMessage]);

//   useEffect(() => {
//     if (data) {
//       setMessages(data.getMessageRoom.messages);
//     }
//   }, [data, bodyEl]);

//   useEffect(() => {
//     if (messages.length > 0) {
//       bodyEl.current.scrollTop = bodyEl.current.scrollHeight;
//     }
//   }, [messages, bodyEl]);

//   if (loading && !data) {
//     return <Fragment />;
//   }

//   return (
//     <MessageRoomPresenter
//       data={data}
//       profile={profiles.getMyProfile}
//       message={message}
//       messages={messages}
//       bodyEl={bodyEl}
//       onChangeMessage={handleChangeMessage}
//       onSubmit={handleSubmit}
//     />
//   );
// };

// export default RoomContainer;

import React, { FC } from "react";

const RoomContainer: FC = () => <div>test</div>;

export default RoomContainer;
