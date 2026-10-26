import { globalStyles } from '@/styles/global-styles';
import {Text, type TextProps} from 'react-native';
import type React from 'react';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
    children?: import('react').ReactNode;
}

const ThemeText: React.FC<Props>=({children, variant = 'h1', ...rest}: Props)=>{
    return(
        <Text
            style={[
                {color:'white', fontFamily:'SpaceMono'},
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >
            {children}
        </Text>
    );
};
export default ThemeText;