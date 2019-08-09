import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f5f5f5;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    margin-top: 30px;
`

export const CardContainer = styled.View`
    flex: 1;
    align-self: stretch;
    justify-content: center;
    max-height: 500px;
    position: relative;
`

export const Card = styled.View`
    border-width: 1px;
    border-color: #ddd;
    border-radius: 8;
    margin: 30px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const CardImage = styled.Image`
    flex: 1;
    height: 300px;
`

export const CardFooter = styled.View`
    background-color: #fff;
    padding: 20px 15px;
`

export const NameText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`

export const BioText = styled.Text`
    font-size: 14px;
    color: #999;
    margin-top: 5px;
    line-height: 18px;
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    margin-bottom: 30px;
`

export const ActionButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    elevation: 2px; /* ONLY WORKS ON ANDROID */

    /* IOS build shadow (elevation) */
    /* shadowOpacity: 0.05px;  
    shadowRadius: 2px;
    shadowColor: #000;
    shadowOffset: { width: 0, height: 2}; */

`

export const NoUser = styled.Text`
    align-self: center;
    color: #999;
    font-size: 24px;
    font-weight: bold;
`