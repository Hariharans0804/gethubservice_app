import { Text } from 'react-native'
import React from 'react'

const EmojiIcon = ({ emoji, size, color }) => {
    return (
        <Text style={{ 
            fontSize: size || 24,
            color: color,
            textAlign: 'center',
            width: size || 24,
            height: size || 24,
            lineHeight: size || 24,
        }}>
            {emoji}
        </Text>
    )
}

export default EmojiIcon
