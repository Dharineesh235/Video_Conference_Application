import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { Link, useParams } from 'react-router-dom'
import '../Home/Home.css'

const Hall = () => {
    const {roomID} = useParams();
    const {userName} = useParams();

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }

    const myMeeting = async(element) => {
        const appID = 1949511341;
        const serverSecret = "864146ad9b764d408e6e9755f2083635";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5), userName );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container : element,
            scenario : {
                mode : ZegoUIKitPrebuilt.VideoConference,
            },
        })
    }

  return (
    <>
        <div className='meeting-hall' ref={myMeeting}  style={{ width: '100vw', height: '100vh' }}/>
    </>
  )
}

export default Hall