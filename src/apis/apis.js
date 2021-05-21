import ToastService from '../services/ToastService';
import { SaveOtp } from '../actions/OTPActions';
import { SignUp } from '../actions/AuthActions';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';


class Apis {
    signUpAuth = ({ number, OTP, UserData }) => {
        let imagePathOnCloud = 'test';
        Data = UserData.UserData;
        return (dispatch) => {
            if (number != OTP) {
                ToastService('error', 'Please fill all inputs');
            } else {
                ToastService('success', 'Signed Up successfully', true);
                auth().createUserWithEmailAndPassword(Data.email, Data.password).then((res) => {
                    dispatch(SignUp(res.user.uid));
                }
                ).then(() => {
                    const UploadData = (path, imageName) => {
                        let reference = storage().ref('users/' + auth().currentUser['uid'] + '/' + imageName);
                        let task = reference.putFile(path);
                        task.then(() => {
                            storage().ref('users/' + auth().currentUser['uid'] + '/new-upload').getDownloadURL().then((res) => {
                                const test = res;
                                database()
                                    .ref('/users/' + auth().currentUser['uid'])
                                    .set({
                                        name: Data.name,
                                        userName: Data.userName,
                                        address: Data.address,
                                        postcode: Data.postcode,
                                        city: Data.city,
                                        country: Data.country,
                                        email: Data.email,
                                        password: Data.password,
                                        photo: test
                                    })
                            }).catch((err) => {
                                console.log(err)
                            });
                        }).catch((e) => console.log('uploading image error => ', e));
                    }
                    UploadData(Data.photo, 'new-upload', Data)
                }).catch((err) => {
                    console.log(err);
                    ToastService('error', err);
                })
            }
        };
    };

    SendOTP = (name) => {
        return (dispatch) => {

            //since we dont have a backEnd to handle functions we will generate the otp here and send it to firebase
            var digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < 6; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            database().ref('/otp/' + name).set({
                OTP: OTP,
            });

            dispatch(SaveOtp(OTP));
        };
    };
}

const apis = new Apis(); // TODO: create instance in another place

export default apis;
