import React from "react";

const ArtistForm = ({ artistName, handleInputChange, handleFormSubmit }) => (
    <form>
        <div className="form-group">
            <label htmlFor="ArtistName">
                <strong>Artist</strong>
            </label>
            <input 
                className="form-control"
                id="ArtistName"
                type="text"
                value={artistName}
                placeholder="Search artist"
                name="artistName"
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="pull-right">
            <button 
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right">Search
            </button>
        </div>
    </form>
)

export default ArtistForm;