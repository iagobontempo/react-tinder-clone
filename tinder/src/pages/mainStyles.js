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

export const MatchContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
    z-index: 999;
`
export const MatchText = styled.Text`
    font-size: 40px;
    color: #fff;
`

export const MatchAvatar = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    border-width: 5px;
    border-color: #fff;
    margin: 30px 0px;
`

export const MatchName = styled.Text`
    font-size: 26px;
    font-weight: bold; 
    color: #fff;
`

export const MatchBio = styled.Text`
    margin-top: 10px;
    font-size: 16px;
    color: rgba(255,255,255,0.8);
    line-height: 24px;
    text-align: center;
    padding: 0px 30px;
`

export const MatchCloseButton = styled.TouchableOpacity`
    margin-top: 30px;
    font-size: 16px;
    color: rgba(255,255,255,0.8);
    text-align: center;
    font-weight: bold;
`

export const MatchCloseText = styled.Text`
     color: rgba(255,255,255,0.8);
`