import React, { useEffect, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tournamentsStore from './store';
import Container from './components/Container';
import H4 from './components/H4';
import Input from './components/Input';
import Button from './components/Button';
import { fetchTournaments } from './redux/fetchData';
import { RootState } from './reducers';
import theme from './theme';

export type Tournament = {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
};

export const App = (props: any) => {
  const dispatch = useDispatch();
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments.items
  );
  const loading = useSelector((state: RootState) => state.tournaments.loading);
  const error = useSelector((state: RootState) => state.tournaments.loading);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newTournament, setNewTournament] = useState('');
  console.log('props', props);
  console.log('tournaments', tournaments);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
    setNewTournament('');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTournament(event.target.value);
  };

  const createNewTournament = () => {
    setShowModal(!showModal);

    const newTournamentPayload: Tournament = {
      id: `${new Date()}`,
      name: newTournament,
      organizer: 'Omnis Omnis',
      game: 'Dota2',
      participants: {
        current: 161,
        max: 256,
      },
      startDate: new Date().toISOString(),
    };

    // POST request to api

    setNewTournament('');
  };

  useEffect(() => {
    tournamentsStore.dispatch(fetchTournaments());
  }, [dispatch]);

  return (
    <>
      {showModal && (
        <div
          style={{
            position: 'absolute',
            marginTop: '0',
            marginLeft: '30%',
            width: '500px',
          }}
        >
          <div
            className="modal"
            style={{
              backgroundColor: '#303030',
              display: 'flex',
              justifyContent: 'flex-start',
              paddingLeft: '10px',
              alignItems: 'flex-start',
              flexDirection: 'column',
              width: '500px',
              height: '300px',
            }}
          >
            <p>Tournament Name:</p>
            <Input
              type="text"
              value={newTournament}
              style={{ width: '90%' }}
              onChange={onChange}
            ></Input>
            <Button onClick={() => closeModal()}>Cancel</Button>
            <Button onClick={() => createNewTournament()}>Ok</Button>
          </div>
        </div>
      )}

      <Container>
        <H4>FACEIT Tournaments</H4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Input placeholder="Search tournament ..." />
          {/* <Button
              onClick={() =>
                tournamentsStore.dispatch({ type: 'FETCH_TOURNAMENTS_BEGIN' })
              }
            >
              Begin fetch
            </Button>
            <Button
              onClick={() =>
                tournamentsStore.dispatch({ type: 'FETCH_TOURNAMENTS_SUCCESS' })
              }
            >
              Success
            </Button>
            <Button
              onClick={() =>
                tournamentsStore.dispatch({ type: 'FETCH_TOURNAMENTS_FAILURE' })
              }
            >
              Error
            </Button>
            <Button onClick={() => newStore.dispatch({ type: 'INCREMENT' })}>
              Increment test
            </Button> */}
          <Button onClick={() => openModal()}>CREATE TOURNAMENT</Button>
        </div>
        {loading && <p>Loading ...</p>}
        {error && <p>Error: {error}</p>}
        <Container
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {Array.isArray(tournaments) &&
            tournaments.map((tournament: Tournament, index: number) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto auto auto',
                  padding: '10px',
                }}
              >
                <div
                  key={index}
                  style={{
                    backgroundColor: `${theme.palette.background.base}`,
                    width: '200px',
                    height: '200px',
                    gap: '10px',
                    padding: '20px',
                  }}
                >
                  <p style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    {tournament.name}
                  </p>
                  <p>
                    {`Organizer: ${tournament.organizer}`}
                    {`Game: ${tournament.game}`}
                    {`Participants: ${tournament.participants.current}/${tournament.participants.max}`}
                    {`Start: ${tournament.startDate}`}
                  </p>
                  <div>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </div>
                </div>
              </div>
            ))}
        </Container>
      </Container>
    </>
  );
};
