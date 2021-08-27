import React, { useEffect } from "react"
import { subscribeUser,removeSubscription } from "../subscription"
import {uuid} from 'uuidv4'

export const _uuid = uuid()
const PushNotification = ()=>{

    const subscribe = ()=>{
        subscribeUser(_uuid)
    }
    const unsubscribe = () =>{
        removeSubscription(_uuid)
    }
    useEffect(()=>{
        Notification.requestPermission((result)=>{
            console.log("User choice ",result)
            if(result!=="granted"){
                console.log("No notification permission granted.")
            }else{
                window.addEventListener('focus',unsubscribe)
                window.addEventListener('blur',subscribe)
            }
        })
        return ()=>{
            unsubscribe()
            window.removeEventListener('blur',subscribe)
            window.removeEventListener('focus',unsubscribe)
        }
    },[])

    return null
}

export default PushNotification