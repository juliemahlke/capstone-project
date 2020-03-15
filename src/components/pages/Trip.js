import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import defaultImg from '../../images/default-image.jpg'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../trip/Note'

Trip.propTypes = {
  trips: PropTypes.array,
}

export default function Trip({ trips }) {
  const params = useParams()
  const trip = trips.find(trip => trip.id === params.id)

  useEffect(() => {
    document.title = 'Trip | ' + trip.title
  })

  return (
    <TripStyled>
      <img src={defaultImg} width="200" alt=""></img>
      <WrapperStyled>
        {trip.date && (
          <Date>
            <FontAwesomeIcon className="icon" icon={['far', 'calendar-alt']} />
            {trip.date}
          </Date>
        )}
        <h1>{trip.title}</h1>
        <Location>USA</Location>
        <LinkStyled href="https://www.google.de" className="notelink">
          <FontAwesomeIcon className="icon" icon={['fas', 'plus-circle']} />
          Notiz hinzufügen
        </LinkStyled>

        <Note
          title="Sehenswürdigkeiten"
          content="Have you heard about Tiny Cloud? It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global Content Delivery Network, image proxy services and auto updates to the TinyMCE editor. They’re also ready for some exciting updates coming soon."
        />
        <Note
          title="Hotels"
          content="Have you heard about Tiny Cloud? It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global Content Delivery Network, image proxy services and auto updates to the TinyMCE editor. They’re also ready for some exciting updates coming soon."
        />
        <Note title="Events" />
        <Note
          title="To do vor dem Urlaub"
          content="Have you heard about Tiny Cloud? It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global Content Delivery Network, image proxy services and auto updates to the TinyMCE editor. They’re also ready for some exciting updates coming soon."
        />
      </WrapperStyled>
    </TripStyled>
  )
}

const TripStyled = styled.section`
  text-align: left;
  background: #fff;

  h1 {
    font-family: 'IBM Plex Sans';
    font-size: 26px;
    font-weight: bold;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #505050;
    margin-bottom: 5px;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 150px;
    object-position: 50% 70%;
  }

  .icon {
    font-size: 16px;
  }
`

const WrapperStyled = styled.div`
  padding: 25px;
`

const Date = styled.div`
  font-family: 'IBM Plex Sans';
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #747474;
`

const Location = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.28;
  color: #747474;
  margin-bottom: 20px;
`

const LinkStyled = styled.a`
  margin-bottom: 40px;
  display: block;
  font-weight: 400;
`
