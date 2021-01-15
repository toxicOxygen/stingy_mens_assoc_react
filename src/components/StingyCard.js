import React from "react";

function UserDetailLine(props)
{
    return (
        <div className="row">
            <div className="col-3"><strong>{props.label}:</strong></div>
            <div className="col-9">{props.value}</div>
        </div>
    )
}

const cardStyle = {
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: '3mm',
    padding: '10px',
    fontSize: '11px',
    boxShadow: '3px 3px 6px rgba(0,0,0,0.7)'
}

function StingyCard(props)
{
     return (
         <>
            <div style={cardStyle}>
                {/* for logo, title and motto */}
                <div className="flex-row">
                    <img className="card-logo" src="https://i.imgur.com/9fi6Uom.png" alt="logo of organization"/>
                    {/* motto and title */}
                    <div className="ml-2 text-center">
                        <h6 className="p-0 m-0">STINGY MEN ASSOCIATION</h6>
                        <p className="p-0 m-0"><strong>Motto: </strong> <em>Let me see what I can do!</em></p>
                    </div>
                </div>
                {/* end */}

                {/* user details */}
                <div className="flex-row">
                    <div className="flex-row" style={{flexGrow: '5'}}>
                        <img className="emv-chip" src="https://i.imgur.com/EiqmohE.png" alt="chipset"/>
                        <div className="ml-2">
                            <h5 className="text-center">IDENTITY CARD</h5>
                            <UserDetailLine label="Name" value="Teacher Kwadwo"/>
                            <UserDetailLine  label="Position" value="Senior Interviewer"/>
                            <UserDetailLine  label="Branch" value="GHANA - ACCRA"/>
                            <UserDetailLine  label="ID" value="GHSMA00498"/>
                        </div>
                    </div>
                    <img className="profile-pic" style={{flexGrow: '2'}} src="https://i.imgur.com/yNlOPgu.jpg" alt="user"/>
                </div>
                {/* end */}

            </div>
         </>
     );
}

export default StingyCard;