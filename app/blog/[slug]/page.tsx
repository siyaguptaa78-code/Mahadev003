import { blogPosts } from "../../../lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-orange-500 text-xs uppercase tracking-wider font-bold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider bg-orange-500/5 border border-orange-500/20 px-2.5 py-1 rounded">
              {post.category}
            </span>
            <span className="text-2xl">{post.icon}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-extrabold text-white leading-tight uppercase">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-zinc-550 text-[10px] uppercase font-bold tracking-wider pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-orange-500" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>{post.readTime}</span>
            </div>
            <div className="text-zinc-600">By Laser247 Analyst</div>
          </div>
        </div>

        {/* Content body */}
        <article 
          className="prose prose-invert max-w-none prose-orange prose-headings:font-space-grotesk prose-headings:font-bold prose-headings:text-white prose-headings:uppercase prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:font-light prose-p:text-sm prose-p:mb-6 prose-a:text-orange-400 hover:prose-a:text-orange-350 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-zinc-400 prose-li:text-sm prose-li:font-light prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Call to action box */}
        <div className="mt-16 p-8 rounded border border-zinc-850 bg-[#0d0d0d] text-center space-y-4">
          <h3 className="text-lg font-space-grotesk font-bold text-white uppercase">Want to put these insights into action?</h3>
          <p className="text-zinc-400 text-xs font-light max-w-sm mx-auto leading-relaxed">
            Get your verified Laser247 ID on WhatsApp in under 5 minutes and start placing smart bets now.
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/918872189471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded"
            >
              Get Your ID Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
