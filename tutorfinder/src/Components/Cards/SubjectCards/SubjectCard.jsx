import React from 'react';
import './SubjectCard.css'

function SubjectCard(props){
    
    return (
    <div>
        <div className="subject-card__Wrapper">
                <img className="subject-card__image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABZVBMVEX///////78///+//3//f/9//z5//+orafv8ev09PT+/fz6+fz9//3y9uzmtbTpvbn23Nz5//nip6nSSk3RbHHivbf46enMLii/Fg60AAGSAAC6IiPMIx7QGxLGIhnZg4OhHBh1DBBsDgWyIBzDIR60Gxa6KSjzzsl0AwBVCgwvCAe2Ew6dHhe2Ki6fJCSEFhKsKyrAVFnpnJYRAACELCmODwu3OjvghHyEHCCYKiaPGx5hBwB2ExTJQju4bW1/EAJaAwZQEBLAX1+vXVYkAABvGRumLiupTk6QExQvAACTKCVVFhN/HiMcBABRAADr0dbzVFJrHR9GDBHcWVYAAABbJSGzPj6hISraRURAAADGxsXU1tDAw72WnZWws6uruKaKnHJ2iVxfd0VacT9KYDg8Uy9SZUmFj3rd4tQ+Vy0pQSTL2MGxuqVndmIxSS1FXTxBWSSntJKOo3WBkV6Hlnx3gl91fG6JvLMCAAAD9UlEQVR4nO3a21MaWRAH4DMHGIcRdSZsAAVxAjGRyC1RWa6J7gaW4JJsdC/RAQYQCDHGXZXJ37/jhcRUWbX7ADWVrt/3og8+dFcfuk8fYQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB75mJMdsgCczLB7lCmwykyj8xnObdy9dgdzBSIc/MLinrP+8N9Hxfp1ZCzBX9gcSkY8oeWwwvc7nAmTRCdK4vag0j0YXQ1GAw9Uji1FPnjxbXYE209nkimqungU8aJpcifLUY2NgNbmeSDVDKdWFUYrVYqsB+XspuPlnL5WC6fLxTTpXui0yU77Y5rYhzs+QstHdzObW/uJKP5WFH7yedi3GV3XBP0sxZP1l5WCuVyJa5lC5q29ctjK28aPFaPWdeq2SevctXii0qxUH6tJVMJr0Klz3A26w1rqZ2Ng1qyVNN2f62/1vI1b2mFSoKMvwmFtUh9IxJP+38rpXbqhWqqVkln3HYHNiFOUfGHopF6PRKPr/qDybd71VwmW0tfDgsi5P3Qamrv91cH5eJa5KC+Fq/88baqJSS745oYroQCWnFvL7Zd3onF8tE//ypXtXUvoZ2C7y+Hl1KRbKZkySSUN08DyyVFtDusyRGVd8uBqJbKZ3d3X27NW59Ln89NpolaZkXfs3ehh9FoInuQneceSneYG5z5nu/7/eGV+z5rlaBzCx0TOJuRmE9RrNpxj5PS6RwbztgdwZQ1VbsjmK5DncrucDeJ+gGdoXMtu5PesDuCafK41KsOI8hX853QDfSGh7V0Jhntjmmahj5ndzhTIDXZSbvb6ZhHR70js0Vlzx0TWFMyut2jXq9/Ohi8H9odz+TpDaPX+9A/Pe73eicqqQffK57mx37/+DI7Kz/moJagwA4bn45PT/t/9z8MKA4Lh/rZaFrJ/dP/ZNAc9o2mi3kkfUgzO8bk5pwwfqMn8vFzS7f3hobOyGQ21rh1GtUmwS3po/H1d0OnVj7LiTkeB4J1SaNn7ux8MD6kLd3WUKZDGrW7N4UjWUAmnZ13BtcbA809XhqdX/SujibRhxh11D6/PqM0C2iNhlG78976KRlMoDcjLMOLM9NUrQJSW91vONjoom11GalldyRTIjPJ7JhusgW8zFDvdsQhxe32i1HHRbWFXhuatAvoZMaMSuaraHcQWJN0Aa0Z/5lsC72mG//9N9+1FukWyuheYsYaEsGXmK8EtUXupfAbDp3iS8wtjhbl8lkk6gVsuGhXUNJpPlR8oUvk/ov7Dfeh3RFMmU78mi0Tb6HMTbyATJbtjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+v38BD9uF/qvoxGUAAAAASUVORK5CYII=" />
                <h3 className="subject-card__name">name</h3>
                <h3 className="subject-card__rating">rating</h3>
                <h3 className="subject-card__price">price</h3>    
        </div>

    </div>
    )
}

export default SubjectCard;