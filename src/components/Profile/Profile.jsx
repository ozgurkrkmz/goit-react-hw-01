import css from './Profile.module.css';
function Profile({ avatar, name, tag, location, stats }){
    return (
        <div className={css.profile}>
            <img src={avatar} alt="" className={css.profileImg} />
            <div className={css.profileInformation}>
                <h1>{name}</h1>
                <h3>@ {tag}</h3>
                <h3>{location}</h3>
            </div>

            <ul className={css.socialList}>
                <li>
                    <span className={css.listName}>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.listName}>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span className={css.listName}>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
            
        </div>
    )
}

export default Profile;