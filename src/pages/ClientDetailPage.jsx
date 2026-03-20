import { useParams } from 'react-router-dom';

const ClientDetailPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Client Detail Page - {id}</h2>
        </div>
    );
}

export default ClientDetailPage;