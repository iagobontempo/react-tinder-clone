import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledTextInput = styled.TextInput`
  height: 46px;
  width: 250px;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 15px;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
  height: 46px;
  width: 250px;
  background-color: #df4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`

export const StyledTextLogin = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
