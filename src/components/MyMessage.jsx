const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        // marginTop: "3px",
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
  );
};

export default MyMessage;

// style={{
//     background: "rgba(255, 255, 255, 0.2)",
//     boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
//     backdropfilter: "blur( 18.5px )",
//     borderRadius: "10px",
//     border: "1px solid rgba( 255, 255, 255, 0.18 )",
//   }}
