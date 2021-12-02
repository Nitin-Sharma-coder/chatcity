const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginBottom: "3px",
            marginTop: "3px",

            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            backgroundColor: "#1C2CFF",
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropfilter: "blur( 18.5px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
