import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
      
   return (
      <div className={style.contenedor}>
         {characters.map((pj,index) => <Card name={pj.name} 
                                    species={pj.species}
                                    gender={pj.gender}
                                    image={pj.image}
                                    key={index}                                    
                                    onClose={()=> onClose(pj.id)}          
         />)}
      </div>
      );
}
