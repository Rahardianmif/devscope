function Skeleton() {
  return (
    <div className="row g-4">

      <div className="col-lg-4">
        <div className="skeleton-card skeleton-profile"></div>
      </div>

      <div className="col-lg-8">

        <div className="row g-4">

          <div className="col-md-6 col-xl-3">
            <div className="skeleton-card skeleton-stat"></div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="skeleton-card skeleton-stat"></div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="skeleton-card skeleton-stat"></div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="skeleton-card skeleton-stat"></div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Skeleton;