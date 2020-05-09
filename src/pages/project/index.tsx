import React, {useState} from 'react';
import './index.scss';
import Navbar from '../../components/navbar';
import Contact from '../../components/contact';
import { BannerType, BannerText } from '../../components/banner-text';
export default function Project() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {Navbar({type: 0})}
      <div className="project container">
        <div className="lets-chat">
          {BannerText({
            type: submitted ? BannerType.TalkSoon : BannerType.LetsChat
          })}
          <div>
            {Contact({
              fullForm: true,
              submissionCallback: setSubmitted,
            })}
          </div>
        </div>
      </div>
    </>
)
}