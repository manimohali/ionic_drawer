import  { useState } from 'react';

import { useParams } from 'react-router';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ChildComponent from './ChildComponent';


const ParentComponent: React.FC = () => {
    const { name } = useParams<{ name: string; }>();

    const [myVariable, setMyVariable] = useState('Hello');

    const updateVariable = (event,value = 'Hello, World!') => {
            setMyVariable(value);
        };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          {/* Condensed header used in IOS App  */}
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name} </IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <ChildComponent onChange={updateVariable}  myProp={myVariable} />
          <button onClick={updateVariable}>Update Variable</button>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ParentComponent; 
  