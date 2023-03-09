import styles from '../../styles/Actions.module.css';

function Actions() {


  return (

    <div className={styles.container}>
      <div className={styles.ctaGrey}>Voir</div>
      <div className={styles.ctaGreen}>Editer</div>
      <div className={styles.ctaWhite}>Supprimer</div>
      
    </div>

  );
}

export default Actions;