import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
    SharedValue,
} from "react-native-reanimated";

/**
 * Props para AccordionItem
 */
interface AccordionItemProps {
    isExpanded: SharedValue<boolean>;
    children: ReactNode;
    viewKey: string;
    style?: ViewStyle;
    duration?: number;
}

/**
 * Componente AccordionItem - Un contenedor animado que se expande y colapsa
 */
const AccordionItem: React.FC<AccordionItemProps> = ({
    isExpanded,
    children,
    viewKey,
    style,
    duration = 500,
}) => {
    const height = useSharedValue(0);

    const derivedHeight = useDerivedValue(() =>
        withTiming(height.value * Number(isExpanded.value), {
            duration,
        })
    );

    const bodyStyle = useAnimatedStyle(() => ({
        height: derivedHeight.value,
    }));

    return (
        <Animated.View
            key={`accordionItem_${viewKey}`}
            style={[styles.animatedView, bodyStyle, style]}
        >
            <View
                onLayout={(e) => {
                    height.value = e.nativeEvent.layout.height;
                }}
                style={styles.wrapper}
            >
                {children}
            </View>
        </Animated.View>
    );
};

/**
 * Props para Item
 */
interface ItemProps {
  children: ReactNode;
}

/**
 * Componente Item - Representa un ítem dentro del Accordion
 */
export const Item: React.FC<ItemProps> = ({ children }) => {
    return <View>{children}</View>;
};

/**
 * Props para Parent
 */
interface ParentProps {
    open: SharedValue<boolean>;
    children: ReactNode;
}

/**
 * Componente Parent - Contenedor principal del Accordion
 */
export const Parent: React.FC<ParentProps> = ({ open, children }) => {
    return (
        <View style={styles.parent}>
            <AccordionItem isExpanded={open} viewKey="Accordion">
                {children}
            </AccordionItem>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        width: "100%",
    },
    wrapper: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        padding: 10,
    },
    animatedView: {
        width: "100%",
        overflow: "hidden",
    },
});

export default AccordionItem;
