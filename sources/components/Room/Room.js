import React from "react";
import { useParams } from "react-router-dom";
import { appId, serversecret } from "../helper";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomid } = useParams();
  const myMeeting = async (element) => {
    const appID = appId;
    const serverSecret = serversecret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "Sayan Somya"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showRoomTimer: true,
      
    //   branding: {
    //     logoURL: "" // The branding LOGO URL.
    //   },
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:3000/room/${roomid}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;
