import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, withIonLifeCycle, IonButtons, IonMenuButton } from '@ionic/react';

class HomePage extends React.Component {
  ionViewWillEnter() {
    console.log('ionViewWillEnter event fired');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave event fired');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter event fired');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave event fired');
  }

  render() {
    return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            {/* Condensed header used in IOS App  */}
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Home </IonTitle>
            </IonToolbar>
            </IonHeader>
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(HomePage);