import { KeyboardAvoidingView, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Button, ButtonText } from "@/components/ui/button";

interface InputDialogProps {
  onClose: () => void;
  onCancel: () => void;
  name: string;
  handleNameChange: (text: string) => void;
  onSubmit: () => void;
}

export const InputDialog = ({
  onClose,
  onCancel,
  name,
  handleNameChange,
  onSubmit,
}: InputDialogProps) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay}
        onPress={onClose}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.dialogBoxContainer}
        >
          <TouchableOpacity 
            style={styles.dialogBox}
            onPress={() => {}}
          >
            <Text className="text-2xl font-bold">
              请输入该定位的名字:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={handleNameChange}
            />
            <View className="flex flex-row w-full justify-evenly">
              <Button size="md" variant="solid" action="positive" onPress={onSubmit}>
                <ButtonText>
                  确定
                </ButtonText>
              </Button>
              <Button size="md" variant="outline" action="secondary" onPress={onCancel}>
                <ButtonText>
                  取消
                </ButtonText>
              </Button>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  )
}

// tailwindcss 没用，只好用原生的css
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  dialogBoxContainer: {
    width: '100%',
    alignItems: 'center',
  },
  dialogBox: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});