import { gql } from '@apollo/client';

export const LIST_OF_GAMES = gql`
query {
  games {
    id
    teamA
    teamB
    goals
    teamACards
    teamBCards
    minute
    gameStatus
  }
}
`

export const UPDATES_SUBSCRIPTION = gql`
  subscription games {
    games{
      id
      teamA
      teamB
      goals
      teamACards
      teamBCards
      minute
      gameStatus
    }
  }
`;