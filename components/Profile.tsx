import Image from 'next/image';

const Profile = () => {
  return (
    <>
      <Image
        src="/profile.jpg"
        alt="profile"
        height={400}
        width={400}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
    </>
  );
};

export default Profile;
