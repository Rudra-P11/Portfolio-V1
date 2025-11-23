const BackgroundBeams = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob 1: Purple */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      
      {/* Blob 2: Cyan */}
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
      
      {/* Blob 3: Pink */}
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-fuchsia rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      
      {/* Grid Overlay for texture */}
      {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div> */}
    </div>
  );
};

export default BackgroundBeams;