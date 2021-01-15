import React from "react";

const formBorderStyle = {
    border: '1px solid rgba(0,0,0, 0.3)',
    borderRadius: '5px',
  };

function RegistrationForm(props)
{
    return(
        <>
            <form style={formBorderStyle} className="p-3">
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" value="Mark" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" value="Otto" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom03">Branch</label>
                        <input type="text" className="form-control" id="validationCustom03" />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom04">Position</label>
                        <select className="custom-select" id="validationCustom04" >
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label for="validationCustom04">Country</label>
                        <select className="custom-select" id="validationCustom04" >
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>

                </div>

                <div className="form-group">
                    <label for="">Passport Photo</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile"/>
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                </div>

                <button className="btn btn-primary" type="submit">Create Card</button>
            </form>

        </>
    )
}


export default RegistrationForm;