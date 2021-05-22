import ToastService from '../services/ToastService';
import { SaveOtp } from '../actions/OTPActions';
import { SignUp, Login, LogOut } from '../actions/AuthActions';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';


class Apis {
    signUpAuth = ({ number, OTP, UserData }) => {
        let Data = UserData.UserData;
        return (dispatch) => {
            if (number != OTP) {
                ToastService('error', 'OTP does not match');
            } else {
                ToastService('success', 'Welcome to our family!', true);
                auth().createUserWithEmailAndPassword(Data.email, Data.password).then((res) => {
                    dispatch(SignUp(res.user.uid));
                }
                ).then(() => {
                    const UploadData = (path, imageName) => {
                        let reference = storage().ref('users/' + auth().currentUser['uid'] + '/' + imageName);
                        let task = reference.putFile(path);
                        task.then(() => {
                            storage().ref('users/' + auth().currentUser['uid'] + '/identification').getDownloadURL().then((res) => {
                                const Url = res;
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
                                        photo: Url,
                                        path: Data.photo
                                    })
                            }).catch((err) => {
                                console.log(err)
                            });
                        }).catch((e) => console.log('uploading image error => ', e));
                    }
                    UploadData(Data.photo, 'identification', Data)
                }).catch((err) => {
                    console.log(err);
                    ToastService('error', 'Something Went wrong!');
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

    loginAuth = (email, password) => {
        return (dispatch) => {
            auth().signInWithEmailAndPassword(email, password).then((res) => {
                ToastService('success', 'Logged in Successfully', true);
                dispatch(Login(res.user.uid));
            }).catch((err) => {
                console.log(err);
                ToastService('error', 'Something Went wrong!');
            })
        };
    };

    logOutAuth = () => {
        return (dispatch) => {
            auth().signOut().then((res) => {
                dispatch(LogOut());
            }).catch((err) => {
                console.log(err);
                ToastService('error', 'Something Went wrong!');
            })
        };
    };

    userData = () => {
        return (async () => {
            return await database()
                .ref('/users/' + auth().currentUser['uid'])
                .once('value')
                .then(snapshot => {
                    return snapshot.val();
                });
        })();
    };

    UpdateUserData = (UserData) => {
        let Data = UserData;
        const UploadData = (path, imageName) => {
            let reference = storage().ref('users/' + auth().currentUser['uid'] + '/' + imageName);
            let task = reference.putFile(path);
            task.then(() => {
                storage().ref('users/' + auth().currentUser['uid'] + '/identification').getDownloadURL().then((res) => {
                    const Url = res;
                    database()
                        .ref('/users/' + auth().currentUser['uid'])
                        .update({
                            name: Data.name,
                            userName: Data.userName,
                            address: Data.address,
                            postcode: Data.postcode,
                            city: Data.city,
                            country: Data.country,
                            email: Data.email,
                            Url: Url,
                            path: Data.path
                        })
                    ToastService('success', 'Updated Successfully!', true);

                }).catch((err) => {
                    ToastService('error', 'Something Went wrong!');
                    console.log(err)
                });
            }).catch((e) => console.log('uploading image error => ', e));
        }
        UploadData(Data.path, 'identification', Data);
    }

    CreateUserProduct = (ProductData) => {
        const Data = ProductData;
        const UploadData = (path, productName) => {
            let reference = storage().ref('products/' + auth().currentUser['uid'] + '/' + productName);
            let task = reference.putFile(path);
            task.then(() => {
                storage().ref('products/' + auth().currentUser['uid'] + '/' + productName).getDownloadURL().then((res) => {
                    const Url = res;
                    database()
                        .ref('/products/' + auth().currentUser['uid'] + '/' + productName)
                        .set({
                            title: Data.title,
                            description: Data.description,
                            Url: Url,
                            path: Data.path
                        })
                    ToastService('success', 'Updated Successfully!', true);

                }).catch((err) => {
                    ToastService('error', 'Something Went wrong!');
                    console.log(err)
                });
            }).catch((e) => console.log('uploading image error => ', e));
        }
        UploadData(Data.photo, Data.title);
    }

    getAllProducts = () => {
        return (async () => {
            return await database()
                .ref('/products')
                .once('value')
                .then(snapshot => {
                    return snapshot.val();
                });
        })();
    };

    getMyProducts = () => {
        return (async () => {
            return await database()
                .ref('/products/' + auth().currentUser['uid'])
                .once('value')
                .then(snapshot => {
                    return snapshot.val();
                });
        })();
    };

}

const apis = new Apis(); // TODO: create instance in another place

export default apis;
