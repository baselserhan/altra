import React, {useEffect, useState} from 'react'
import {ProfileSection, ProfileWrapper, ProfileList, ProfileItem, Span, SpanWeb, SkillsSection, SkillsDesc, Bar, BarTitle, BarProgress, BarParent, ParentSpan, ProfileTitle, SkillsTitle, ProfileTitleSpan, SkillsTitleSpan} from './style.js'
import axios from 'axios'

const Profile = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('js/data.json').then(res => setSkills(res.data.skills));
  }, []);
  
  const MySkills = skills.map(skillItem => {
    return (
      <SkillsSection>
          <Bar key={skillItem.id}>
            <BarTitle>{skillItem.title}</BarTitle>
            <BarProgress>{skillItem.progress}</BarProgress>
            <BarParent>
              <ParentSpan width={skillItem.width}></ParentSpan>
            </BarParent>
          </Bar>   
        </SkillsSection>
    )
  });
  return (
    <ProfileSection>
      <div className="container">
        <ProfileWrapper>
          <ProfileTitle><ProfileTitleSpan>My</ProfileTitleSpan> Profile</ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <Span>Name</Span>
              Basel Serhan
            </ProfileItem>
            <ProfileItem>
              <Span>Birthday</Span>
              14/10/1993
            </ProfileItem>
            <ProfileItem>
              <Span>Address</Span>
              Gaza
            </ProfileItem>
            <ProfileItem>
              <Span>Phone</Span>
              +1234567890
            </ProfileItem>
            <ProfileItem>
              <Span>Email</Span>
              basel123@gmail.com
            </ProfileItem>
            <ProfileItem>
              <Span>Website</Span>
              <SpanWeb className="web">www.google.com</SpanWeb>
            </ProfileItem>
          </ProfileList>
        </ProfileWrapper>
        <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
          <SkillsDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis repellat, fugiat dicta laborum tempore!
          </SkillsDesc>
          {MySkills}
      </div> 
    </ProfileSection>
  )
}

export default Profile