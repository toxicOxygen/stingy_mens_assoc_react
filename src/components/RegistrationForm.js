import React from "react";

const formBorderStyle = {
    border: '1px solid rgba(0,0,0, 0.3)',
    borderRadius: '5px',
};

const positions = [
    'Snr. Interviewer',
    'President',
    'Youth Organizer',
    'Vice President',
    'member'
];

const countries = [
    'Ghana',
    'Nigeria',
    'Uganda',
    'Kenya',
    'Togo',
    'Ivory Coast',
    'Burkina Faso'
]

function RegistrationForm(props)
{
    return(
        <>
            <form style={formBorderStyle} className="p-3">
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input type="text" className="form-control" name="firstName" value={props.data.firstName} onChange={props.handleChange}/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" className="form-control" name="lastName" value={props.data.lastName} onChange={props.handleChange}/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom03">Branch</label>
                        <input type="text" className="form-control" name="branch" value={props.data.branch} onChange={props.handleChange}/>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom04">Position</label>
                        <select className="custom-select" name="position" value={props.data.position} onChange={props.handleChange}>
                            <option selected disabled value="">Choose...</option>
                            {
                                positions.map((pos)=>(<option value={pos}>{pos}</option>))
                            }
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label for="validationCustom04">Country</label>
                        <select className="custom-select" name="country" value={props.data.country} onChange={props.handleChange} >
                            <option selected disabled value="">Choose...</option>
                            {
                                countries.map((pos)=>(<option value={pos}>{pos}</option>))
                            }
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>

                </div>

                <div className="form-group">
                    <label for="">Passport Photo</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="photoUrl" accept="image/*" onChange={props.handleChange}/>
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                </div>

                <button className="btn btn-primary" type="submit" onClick={props.onSubmit}>Create Card</button>
            </form>

        </>
    )
}


export default RegistrationForm;