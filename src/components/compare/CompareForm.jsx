import { useState } from "react";

function CompareForm({ onCompare }) {
  const [userA, setUserA] =
    useState("");

  const [userB, setUserB] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userA.trim() ||
        !userB.trim()) {
      return;
    }

    onCompare(userA, userB);
  };

  return (
    <div className="compare-form-card">

      <div className="compare-form-header">

        <h2>
          Compare GitHub Users
        </h2>

        <p>
          Analyze repositories,
          stars, forks and
          languages side by side.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="compare-form"
      >

        <div className="compare-input-group">

          <label>
            First User
          </label>

          <input
            type="text"
            placeholder="e.g. torvalds"
            value={userA}
            onChange={(e) =>
              setUserA(
                e.target.value
              )
            }
          />

        </div>

        <div className="compare-vs">
          VS
        </div>

        <div className="compare-input-group">

          <label>
            Second User
          </label>

          <input
            type="text"
            placeholder="e.g. gaearon"
            value={userB}
            onChange={(e) =>
              setUserB(
                e.target.value
              )
            }
          />

        </div>

        <button
          type="submit"
          className="compare-btn"
        >
          Compare Users
        </button>

      </form>

    </div>
  );
}

export default CompareForm;