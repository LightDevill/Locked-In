import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
export default function SlideIn({ children, direction='right', duration=300, delay=0 }) { const start = direction==='left'?-24:direction==='up'?-24:24; const tx = useRef(new Animated.Value(start)).current; useEffect(()=>{Animated.timing(tx,{toValue:0,duration,delay,useNativeDriver:true}).start();},[delay,duration,tx]); return <Animated.View style={{ transform:[{ translateX: tx }] }}>{children}</Animated.View>; }
