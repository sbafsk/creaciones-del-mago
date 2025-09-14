"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  tags: string[]
}

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      alert("URL copiada al portapapeles")
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Blog
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="bg-violet-500/10 border-violet-500/20">
                {post.category}
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-1" />
                Compartir
              </Button>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
                ul: ({ children }) => <ul className="mb-4 space-y-2 text-muted-foreground">{children}</ul>,
                li: ({ children }) => (
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{children}</span>
                  </li>
                ),
                strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                a: ({ href, children }) => (
                  <Link href={href || "#"} className="text-violet-500 hover:text-violet-400 underline">
                    {children}
                  </Link>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-violet-500 pl-4 my-6 italic text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-transparent">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles CTA */}
          <Card className="mt-12 bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-violet-400" />
              <h3 className="text-2xl font-bold mb-4">¿Te gustó este artículo?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Descubre más contenido sobre impresión 3D, técnicas avanzadas y consejos profesionales en nuestro blog.
              </p>
              <Button asChild>
                <Link href="/blog">Ver Más Artículos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
