import "../assets/css/pages.css";
import React from "react";
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';

type Props = {};

const Browse = (props: Props) => {

  const url:string = '';
  const [lists, setLists] = useState<any>([]);

  const fakeLists: any = [
    {
      id: 1,
      image: 'https://photos.prnewswire.com/prnfull/20110719/LA37366',
      name: 'JAMBA JUICE JUICES TIER LIST OH MY GULAY',
      numItems: 12,
      votes: 23
    }, 
    {
      id: 2,
      image: 'https://cdn.vox-cdn.com/thumbor/3ZZw_J5a_Pnp1C_ChHoNR8H-uZU=/0x0:1999x1296/1200x800/filters:focal(841x489:1159x807)/cdn.vox-cdn.com/uploads/chorus_image/image/72478592/4_teams.0.jpeg',
      name: 'Boba',
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
      <h1 className="text-white mt-8 mb-6 font-urbanist text-5xl px-10">Showing all tier lists</h1>
      {lists &&
      
      <div className="container-for-cards-container flex justify-center">
        <div className="cards flex flex-col justify-center max-w-lg">
        {lists.map((list: any) => (
          <Card list={list} />
        ))}
        </div>
      </div>
      
      
      }
    </div>
  );
};

export default Browse;
