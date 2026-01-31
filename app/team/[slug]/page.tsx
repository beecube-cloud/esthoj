import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, GraduationCap, Award, BookOpen, Briefcase, Target, Mic2, BookMarked, Users } from 'lucide-react';
import { getTeamProfile } from '@/utils/teamProfiles';

interface TeamProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TeamProfilePageProps) {
  const { slug } = await params;
  const profile = getTeamProfile(slug);
  if (!profile) return { title: 'Team Member | Esthoj Group' };
  return {
    title: `${profile.name} - ${profile.role} | Esthoj Group`,
    description: profile.biography.slice(0, 160) + '...',
  };
}

export default async function TeamProfilePage({ params }: TeamProfilePageProps) {
  const { slug } = await params;
  const profile = getTeamProfile(slug);

  if (!profile) {
    notFound();
  }

  const SectionTitle = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
    <h3 className="flex items-center gap-2 text-xl font-bold text-[#1A1F4E] mb-4">
      <Icon className="h-5 w-5 text-[#1A1F4E]" />
      {children}
    </h3>
  );

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 text-[#1A1F4E] hover:text-[#03045E] font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Team
        </Link>

        {/* Hero section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="shrink-0">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1F4E] mb-2">
              {profile.name}
            </h1>
            <p className="text-lg text-[#1A1F4E]/80 font-medium mb-4">{profile.role}</p>
          </div>
        </div>

        {/* Abridged Biography */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
          <SectionTitle icon={BookOpen}>Abridged Biography</SectionTitle>
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">
            {profile.biography}
          </div>
        </section>

        {/* Education and Qualifications */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
          <SectionTitle icon={GraduationCap}>Education and Qualifications</SectionTitle>
          <div className="space-y-6">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-[#1A1F4E]/20 pl-4 py-2">
                <p className="text-sm font-medium text-[#1A1F4E]/70 mb-1">{edu.period}</p>
                <p className="font-semibold text-[#1A1F4E]">{edu.degree}, {edu.institution}</p>
                {edu.specialization && (
                  <p className="text-gray-600 text-sm">Specialization: {edu.specialization}</p>
                )}
                {edu.note && (
                  <p className="text-gray-600 text-sm mt-1">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Professional Affiliations */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
          <SectionTitle icon={Briefcase}>Professional Affiliations / Certifications</SectionTitle>
          <ul className="space-y-2">
            {profile.professionalAffiliations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600">
                <span className="text-[#1A1F4E] mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Teaching & Academic Research */}
        {profile.teachingExperience && profile.teachingExperience.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
            <SectionTitle icon={Users}>Teaching & Academic Research Experience</SectionTitle>
            <ul className="space-y-2">
              {profile.teachingExperience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1A1F4E] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Interests */}
        {profile.interests && profile.interests.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
            <SectionTitle icon={Target}>Interests</SectionTitle>
            <ul className="space-y-2">
              {profile.interests.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1A1F4E] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {profile.awards && profile.awards.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
            <SectionTitle icon={Award}>Awards</SectionTitle>
            <ul className="space-y-2">
              {profile.awards.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1A1F4E] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Publications */}
        {profile.publications && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
            <SectionTitle icon={BookMarked}>List of Academic Publications</SectionTitle>
            <div className="space-y-6">
              {profile.publications.journal && profile.publications.journal.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1A1F4E] mb-2">Journal Papers (Academic)</h4>
                  <ul className="space-y-2">
                    {profile.publications.journal.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#1A1F4E] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {profile.publications.conference && profile.publications.conference.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1A1F4E] mb-2">Conference Papers (Peer Reviewed)</h4>
                  <ul className="space-y-2">
                    {profile.publications.conference.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#1A1F4E] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {profile.publications.poster && profile.publications.poster.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1A1F4E] mb-2">Poster Presentation</h4>
                  <ul className="space-y-2">
                    {profile.publications.poster.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#1A1F4E] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {profile.publications.oral && profile.publications.oral.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1A1F4E] mb-2">Oral Presentation</h4>
                  <ul className="space-y-2">
                    {profile.publications.oral.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#1A1F4E] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Training and Workshop Facilitated */}
        {profile.trainingFacilitated && profile.trainingFacilitated.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md mb-8">
            <SectionTitle icon={Mic2}>Training and Workshop Facilitated</SectionTitle>
            <ul className="space-y-2">
              {profile.trainingFacilitated.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1A1F4E] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Seminars and Workshop Attended */}
        {profile.seminarsAttended && profile.seminarsAttended.length > 0 && (
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
            <SectionTitle icon={BookOpen}>Seminars and Workshop Attended</SectionTitle>
            <ul className="space-y-2">
              {profile.seminarsAttended.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1A1F4E] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
