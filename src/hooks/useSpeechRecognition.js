import React, { useEffect, useState } from 'react'

let recognition = null
if('webkitSpeechRecognition' in window){
    recognition = new window.webkitSpeechRecognition()
    recognition.continuos = true
    recognition.lang = 'it-IT'
}

export const useSpeechRecognition = () => {
    const [textR, setTextR] = useState('')
    const [isListening, setIsListening] = useState(false)

    useEffect(() => {
      if(!recognition) return
      recognition.onresult = (speechRecognitionEvent) =>{
        console.log("onresult event:", speechRecognitionEvent);
        setTextR(speechRecognitionEvent.results[0][0].transcript)
        recognition.stop()
        setIsListening(false)
      }

    
    }, [])

    const startListening = () => {
        setTextR('')
        setIsListening(true)
        recognition.start()
    }

    const stopListening = () => {
        setIsListening(false)
        recognition.stop()
    }

    return {
        textR,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition
    }
    
}

