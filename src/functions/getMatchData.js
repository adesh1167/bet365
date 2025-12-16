import { baseApiUrl } from "../data/url";

export default async function getMatchData({ matchId, user }) {
    if (!matchId) return;

    if (sessionStorage.getItem(`match-${matchId}`)) {
        return ({
            status: 'success',
            data: JSON.parse(sessionStorage.getItem(`match-${matchId}`))
        })
    }

    return fetch(`${baseApiUrl}/get-match-data.php?match-id=${matchId}&user=${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(err => ({
            error: true,
            message: err.message
        }));
}