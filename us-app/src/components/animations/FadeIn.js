import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
export default function FadeIn({ children, duration=300, delay=0 }) { const opacity = useRef(new Animated.Value(0)).current; const ty = useRef(new Animated.Value(20)).current; useEffect(() => { Animated.parallel([Animated.timing(opacity,{toValue:1,duration,delay,useNativeDriver:true}),Animated.timing(ty,{toValue:0,duration,delay,useNativeDriver:true})]).start(); }, [delay,duration,opacity,ty]); return <Animated.View style={{ opacity, transform:[{ translateY: ty }] }}>{children}</Animated.View>; }
