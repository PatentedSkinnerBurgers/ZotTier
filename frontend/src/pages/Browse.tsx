import "../assets/css/pages.css";
import React from "react";
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

type Props = {};

const Browse = (props: Props) => {

  const url:string = '';
  const [lists, setLists] = useState<any>([]);

  const fakeLists: any = [
    {
      id: 1,
      image: 'https://cblproperty.blob.core.windows.net/production/assets/blt5a2a72eda2fddb43-Jamba_Juice_6613.png',
      name: 'JAMBA JUICE JUICES TIER LIST OH MY GULAY',
      numItems: 12,
      votes: 23
    }, 
    {
      id: 2,
      image: 'https://cdn.vox-cdn.com/thumbor/3ZZw_J5a_Pnp1C_ChHoNR8H-uZU=/0x0:1999x1296/1200x800/filters:focal(841x489:1159x807)/cdn.vox-cdn.com/uploads/chorus_image/image/72478592/4_teams.0.jpeg',
      name: 'Boba?????',
      numItems: 7,
      votes: 70
    }, 
    {
      id: 3,
      image: 'https://c8.alamy.com/comp/2BFBT3X/irvine-california-16-april-2020-brandywine-in-the-middle-earth-area-of-the-university-of-california-irvine-campus-2BFBT3X.jpg',
      name: 'On-Campus Dining Locations',
      numItems: 9,
      votes: 54
    }
  ] 

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if(res.ok) {
          console.log('Response ok')
          return fakeLists; // Change later
          return res.json();
        }
        else {
          console.log('Could not fetch the lists');
        }
      })
      .then((everyList) => {
        setLists(everyList);
        console.log(lists);
      })
  }, []);

  return (
    <div className="browse-gradient h-screen min-h-[300px] px-10 pt-10">
      <h1 className="text-white mt-8 font-urbanist text-5xl px-10">Showing all tier lists</h1>
      {lists && <div className="cards flex flex-col justify-center">
        {console.log('in div')}
        {lists.map((list: any) => (
          <Link to='/' className="card" key={list.id}>
            <div className="card-image">
              <img src={`${list.image}`} alt={`Image for the ${list.name} tier list`} />
            </div>
            
            <h2 className="text-white">{list.name}</h2>
            <p className="text-white"> <span>{`${list.votes} votes`}</span> <span>{`${list.numItems} items`}</span> </p>
          </Link>
        ))}
      </div>}
    </div>
  );
};

export default Browse;
