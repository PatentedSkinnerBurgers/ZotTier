import {Link} from 'react-router-dom';

type Props = {
    list: any
};

const Card = (props: Props) => {

    const list:any = props.list;

    return (
        <Link to='/' className="card my-4" key={list.id}>
            <div className="max-h-[1000px]" style={{backgroundImage: `url(${list.image})`}}>
                <div className="card-image">
                <img src={`${list.image}`} alt={`Image for the ${list.name} tier list`} />
                </div>
                
                <p className="text-white text-xl"> <span className="pr-2">{`${list.votes} votes`}</span> <span>{`${list.numItems} items`}</span> </p>
                <h2 className="text-white text-4xl">{list.name}</h2>
            </div>
            
          </Link>
    );
}
 
export default Card;